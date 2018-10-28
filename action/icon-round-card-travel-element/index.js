import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCardTravelElement
 * @class IconRoundCardTravelElement
 * @extends {AoflElement}
 */
class IconRoundCardTravelElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCardTravelElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-card-travel';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCardTravelElement.is, IconRoundCardTravelElement);

export default IconRoundCardTravelElement;
