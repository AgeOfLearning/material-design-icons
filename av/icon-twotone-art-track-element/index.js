import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneArtTrackElement
 * @class IconTwotoneArtTrackElement
 * @extends {AoflElement}
 */
class IconTwotoneArtTrackElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneArtTrackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-art-track';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneArtTrackElement.is, IconTwotoneArtTrackElement);

export default IconTwotoneArtTrackElement;
