import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpArtTrackElement
 * @class IconSharpArtTrackElement
 * @extends {AoflElement}
 */
class IconSharpArtTrackElement extends AoflElement {
  /**
   * Creates an instance of IconSharpArtTrackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-art-track';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpArtTrackElement.is, IconSharpArtTrackElement);

export default IconSharpArtTrackElement;
