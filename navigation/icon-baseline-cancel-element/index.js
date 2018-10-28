import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCancelElement
 * @class IconBaselineCancelElement
 * @extends {AoflElement}
 */
class IconBaselineCancelElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCancelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-cancel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCancelElement.is, IconBaselineCancelElement);

export default IconBaselineCancelElement;
