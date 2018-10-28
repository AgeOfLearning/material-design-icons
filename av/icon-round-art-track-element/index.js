import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundArtTrackElement
 * @class IconRoundArtTrackElement
 * @extends {AoflElement}
 */
class IconRoundArtTrackElement extends AoflElement {
  /**
   * Creates an instance of IconRoundArtTrackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-art-track';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundArtTrackElement.is, IconRoundArtTrackElement);

export default IconRoundArtTrackElement;
