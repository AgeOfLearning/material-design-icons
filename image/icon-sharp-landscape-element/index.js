import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpLandscapeElement
 * @class IconSharpLandscapeElement
 * @extends {AoflElement}
 */
class IconSharpLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconSharpLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpLandscapeElement.is, IconSharpLandscapeElement);

export default IconSharpLandscapeElement;
