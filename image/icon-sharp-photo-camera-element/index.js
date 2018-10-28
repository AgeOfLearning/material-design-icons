import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPhotoCameraElement
 * @class IconSharpPhotoCameraElement
 * @extends {AoflElement}
 */
class IconSharpPhotoCameraElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPhotoCameraElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-photo-camera';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPhotoCameraElement.is, IconSharpPhotoCameraElement);

export default IconSharpPhotoCameraElement;
