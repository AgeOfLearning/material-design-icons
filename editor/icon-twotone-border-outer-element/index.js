import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderOuterElement
 * @class IconTwotoneBorderOuterElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderOuterElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderOuterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-outer';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderOuterElement.is, IconTwotoneBorderOuterElement);

export default IconTwotoneBorderOuterElement;
