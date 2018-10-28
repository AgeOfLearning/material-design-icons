import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTheatersElement
 * @class IconRoundTheatersElement
 * @extends {AoflElement}
 */
class IconRoundTheatersElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTheatersElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-theaters';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTheatersElement.is, IconRoundTheatersElement);

export default IconRoundTheatersElement;
