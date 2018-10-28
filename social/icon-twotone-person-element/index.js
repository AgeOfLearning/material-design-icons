import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePersonElement
 * @class IconTwotonePersonElement
 * @extends {AoflElement}
 */
class IconTwotonePersonElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePersonElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-person';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePersonElement.is, IconTwotonePersonElement);

export default IconTwotonePersonElement;
