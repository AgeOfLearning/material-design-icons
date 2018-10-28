import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineArtTrackElement
 * @class IconOutlineArtTrackElement
 * @extends {AoflElement}
 */
class IconOutlineArtTrackElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineArtTrackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-art-track';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineArtTrackElement.is, IconOutlineArtTrackElement);

export default IconOutlineArtTrackElement;
