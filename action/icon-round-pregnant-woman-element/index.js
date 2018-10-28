import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPregnantWomanElement
 * @class IconRoundPregnantWomanElement
 * @extends {AoflElement}
 */
class IconRoundPregnantWomanElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPregnantWomanElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pregnant-woman';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPregnantWomanElement.is, IconRoundPregnantWomanElement);

export default IconRoundPregnantWomanElement;
