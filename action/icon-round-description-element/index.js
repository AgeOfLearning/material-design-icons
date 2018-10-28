import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDescriptionElement
 * @class IconRoundDescriptionElement
 * @extends {AoflElement}
 */
class IconRoundDescriptionElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDescriptionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-description';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDescriptionElement.is, IconRoundDescriptionElement);

export default IconRoundDescriptionElement;
