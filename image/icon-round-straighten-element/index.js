import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundStraightenElement
 * @class IconRoundStraightenElement
 * @extends {AoflElement}
 */
class IconRoundStraightenElement extends AoflElement {
  /**
   * Creates an instance of IconRoundStraightenElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-straighten';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundStraightenElement.is, IconRoundStraightenElement);

export default IconRoundStraightenElement;
