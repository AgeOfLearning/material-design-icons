import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineMusicOffElement
 * @class IconOutlineMusicOffElement
 * @extends {AoflElement}
 */
class IconOutlineMusicOffElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineMusicOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-music-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineMusicOffElement.is, IconOutlineMusicOffElement);

export default IconOutlineMusicOffElement;
