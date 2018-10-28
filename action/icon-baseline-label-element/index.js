import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLabelElement
 * @class IconBaselineLabelElement
 * @extends {AoflElement}
 */
class IconBaselineLabelElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLabelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-label';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLabelElement.is, IconBaselineLabelElement);

export default IconBaselineLabelElement;
