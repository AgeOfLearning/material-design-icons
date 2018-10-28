import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDirectionsWalkElement
 * @class IconRoundDirectionsWalkElement
 * @extends {AoflElement}
 */
class IconRoundDirectionsWalkElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDirectionsWalkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-directions-walk';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDirectionsWalkElement.is, IconRoundDirectionsWalkElement);

export default IconRoundDirectionsWalkElement;
