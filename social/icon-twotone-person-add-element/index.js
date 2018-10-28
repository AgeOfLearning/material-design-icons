import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePersonAddElement
 * @class IconTwotonePersonAddElement
 * @extends {AoflElement}
 */
class IconTwotonePersonAddElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePersonAddElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-person-add';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePersonAddElement.is, IconTwotonePersonAddElement);

export default IconTwotonePersonAddElement;
