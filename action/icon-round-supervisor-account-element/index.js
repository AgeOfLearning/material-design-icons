import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSupervisorAccountElement
 * @class IconRoundSupervisorAccountElement
 * @extends {AoflElement}
 */
class IconRoundSupervisorAccountElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSupervisorAccountElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-supervisor-account';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSupervisorAccountElement.is, IconRoundSupervisorAccountElement);

export default IconRoundSupervisorAccountElement;
