import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNewReleasesElement
 * @class IconRoundNewReleasesElement
 * @extends {AoflElement}
 */
class IconRoundNewReleasesElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNewReleasesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-new-releases';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNewReleasesElement.is, IconRoundNewReleasesElement);

export default IconRoundNewReleasesElement;
