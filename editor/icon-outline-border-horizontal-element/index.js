import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderHorizontalElement
 * @class IconOutlineBorderHorizontalElement
 * @extends {AoflElement}
 */
class IconOutlineBorderHorizontalElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderHorizontalElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-horizontal';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderHorizontalElement.is, IconOutlineBorderHorizontalElement);

export default IconOutlineBorderHorizontalElement;
