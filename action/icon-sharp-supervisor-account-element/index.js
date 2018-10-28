import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSupervisorAccountElement
 * @class IconSharpSupervisorAccountElement
 * @extends {AoflElement}
 */
class IconSharpSupervisorAccountElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSupervisorAccountElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-supervisor-account';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSupervisorAccountElement.is, IconSharpSupervisorAccountElement);

export default IconSharpSupervisorAccountElement;
