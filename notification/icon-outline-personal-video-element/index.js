import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePersonalVideoElement
 * @class IconOutlinePersonalVideoElement
 * @extends {AoflElement}
 */
class IconOutlinePersonalVideoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePersonalVideoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-personal-video';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePersonalVideoElement.is, IconOutlinePersonalVideoElement);

export default IconOutlinePersonalVideoElement;
