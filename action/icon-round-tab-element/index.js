import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTabElement
 * @class IconRoundTabElement
 * @extends {AoflElement}
 */
class IconRoundTabElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTabElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-tab';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTabElement.is, IconRoundTabElement);

export default IconRoundTabElement;
