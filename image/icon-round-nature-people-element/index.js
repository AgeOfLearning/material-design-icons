import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNaturePeopleElement
 * @class IconRoundNaturePeopleElement
 * @extends {AoflElement}
 */
class IconRoundNaturePeopleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNaturePeopleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-nature-people';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNaturePeopleElement.is, IconRoundNaturePeopleElement);

export default IconRoundNaturePeopleElement;
