import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSupervisorAccountElement
 * @class IconOutlineSupervisorAccountElement
 * @extends {AoflElement}
 */
class IconOutlineSupervisorAccountElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSupervisorAccountElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-supervisor-account';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSupervisorAccountElement.is, IconOutlineSupervisorAccountElement);

export default IconOutlineSupervisorAccountElement;
