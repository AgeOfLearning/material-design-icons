import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBeachAccessElement
 * @class IconRoundBeachAccessElement
 * @extends {AoflElement}
 */
class IconRoundBeachAccessElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBeachAccessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-beach-access';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBeachAccessElement.is, IconRoundBeachAccessElement);

export default IconRoundBeachAccessElement;
