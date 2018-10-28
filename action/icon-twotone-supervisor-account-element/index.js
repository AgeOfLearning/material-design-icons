import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSupervisorAccountElement
 * @class IconTwotoneSupervisorAccountElement
 * @extends {AoflElement}
 */
class IconTwotoneSupervisorAccountElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSupervisorAccountElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-supervisor-account';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSupervisorAccountElement.is, IconTwotoneSupervisorAccountElement);

export default IconTwotoneSupervisorAccountElement;
