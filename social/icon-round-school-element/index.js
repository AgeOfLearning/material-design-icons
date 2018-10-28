import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSchoolElement
 * @class IconRoundSchoolElement
 * @extends {AoflElement}
 */
class IconRoundSchoolElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSchoolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-school';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSchoolElement.is, IconRoundSchoolElement);

export default IconRoundSchoolElement;
