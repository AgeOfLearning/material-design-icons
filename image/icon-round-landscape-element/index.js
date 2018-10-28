import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLandscapeElement
 * @class IconRoundLandscapeElement
 * @extends {AoflElement}
 */
class IconRoundLandscapeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLandscapeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-landscape';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLandscapeElement.is, IconRoundLandscapeElement);

export default IconRoundLandscapeElement;
