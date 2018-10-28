import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDirectionsSubwayElement
 * @class IconRoundDirectionsSubwayElement
 * @extends {AoflElement}
 */
class IconRoundDirectionsSubwayElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDirectionsSubwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-directions-subway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDirectionsSubwayElement.is, IconRoundDirectionsSubwayElement);

export default IconRoundDirectionsSubwayElement;
