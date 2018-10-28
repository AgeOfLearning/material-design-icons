import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneTagFacesElement
 * @class IconTwotoneTagFacesElement
 * @extends {AoflElement}
 */
class IconTwotoneTagFacesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneTagFacesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-tag-faces';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneTagFacesElement.is, IconTwotoneTagFacesElement);

export default IconTwotoneTagFacesElement;
