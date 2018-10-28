import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpTagFacesElement
 * @class IconSharpTagFacesElement
 * @extends {AoflElement}
 */
class IconSharpTagFacesElement extends AoflElement {
  /**
   * Creates an instance of IconSharpTagFacesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-tag-faces';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpTagFacesElement.is, IconSharpTagFacesElement);

export default IconSharpTagFacesElement;
