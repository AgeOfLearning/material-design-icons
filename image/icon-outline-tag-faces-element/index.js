import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTagFacesElement
 * @class IconOutlineTagFacesElement
 * @extends {AoflElement}
 */
class IconOutlineTagFacesElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTagFacesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tag-faces';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTagFacesElement.is, IconOutlineTagFacesElement);

export default IconOutlineTagFacesElement;
