import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPetsElement
 * @class IconRoundPetsElement
 * @extends {AoflElement}
 */
class IconRoundPetsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPetsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pets';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPetsElement.is, IconRoundPetsElement);

export default IconRoundPetsElement;
