import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneBorderColorElement
 * @class IconTwotoneBorderColorElement
 * @extends {AoflElement}
 */
class IconTwotoneBorderColorElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneBorderColorElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-border-color';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneBorderColorElement.is, IconTwotoneBorderColorElement);

export default IconTwotoneBorderColorElement;
