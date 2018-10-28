import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineTouchAppElement
 * @class IconBaselineTouchAppElement
 * @extends {AoflElement}
 */
class IconBaselineTouchAppElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineTouchAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-touch-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineTouchAppElement.is, IconBaselineTouchAppElement);

export default IconBaselineTouchAppElement;
