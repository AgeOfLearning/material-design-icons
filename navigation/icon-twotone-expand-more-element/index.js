import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExpandMoreElement
 * @class IconTwotoneExpandMoreElement
 * @extends {AoflElement}
 */
class IconTwotoneExpandMoreElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExpandMoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-expand-more';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExpandMoreElement.is, IconTwotoneExpandMoreElement);

export default IconTwotoneExpandMoreElement;
