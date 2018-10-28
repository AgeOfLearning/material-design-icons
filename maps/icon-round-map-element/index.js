import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMapElement
 * @class IconRoundMapElement
 * @extends {AoflElement}
 */
class IconRoundMapElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMapElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-map';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMapElement.is, IconRoundMapElement);

export default IconRoundMapElement;
