import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPersonalVideoElement
 * @class IconSharpPersonalVideoElement
 * @extends {AoflElement}
 */
class IconSharpPersonalVideoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPersonalVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-personal-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPersonalVideoElement.is, IconSharpPersonalVideoElement);

export default IconSharpPersonalVideoElement;
