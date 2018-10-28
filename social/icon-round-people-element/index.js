import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPeopleElement
 * @class IconRoundPeopleElement
 * @extends {AoflElement}
 */
class IconRoundPeopleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPeopleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-people';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPeopleElement.is, IconRoundPeopleElement);

export default IconRoundPeopleElement;
