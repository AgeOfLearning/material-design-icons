import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPeopleOutlineElement
 * @class IconRoundPeopleOutlineElement
 * @extends {AoflElement}
 */
class IconRoundPeopleOutlineElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPeopleOutlineElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-people-outline';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPeopleOutlineElement.is, IconRoundPeopleOutlineElement);

export default IconRoundPeopleOutlineElement;
