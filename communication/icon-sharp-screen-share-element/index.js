import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpScreenShareElement
 * @class IconSharpScreenShareElement
 * @extends {AoflElement}
 */
class IconSharpScreenShareElement extends AoflElement {
  /**
   * Creates an instance of IconSharpScreenShareElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-screen-share';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpScreenShareElement.is, IconSharpScreenShareElement);

export default IconSharpScreenShareElement;
