import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineBorderOuterElement
 * @class IconOutlineBorderOuterElement
 * @extends {AoflElement}
 */
class IconOutlineBorderOuterElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineBorderOuterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-border-outer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineBorderOuterElement.is, IconOutlineBorderOuterElement);

export default IconOutlineBorderOuterElement;
