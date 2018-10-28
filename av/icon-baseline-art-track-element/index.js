import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineArtTrackElement
 * @class IconBaselineArtTrackElement
 * @extends {AoflElement}
 */
class IconBaselineArtTrackElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineArtTrackElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-art-track';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineArtTrackElement.is, IconBaselineArtTrackElement);

export default IconBaselineArtTrackElement;
