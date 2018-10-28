import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneHelpElement
 * @class IconTwotoneHelpElement
 * @extends {AoflElement}
 */
class IconTwotoneHelpElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneHelpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-help';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneHelpElement.is, IconTwotoneHelpElement);

export default IconTwotoneHelpElement;
