import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSupervisorAccountElement
 * @class IconBaselineSupervisorAccountElement
 * @extends {AoflElement}
 */
class IconBaselineSupervisorAccountElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSupervisorAccountElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-supervisor-account';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSupervisorAccountElement.is, IconBaselineSupervisorAccountElement);

export default IconBaselineSupervisorAccountElement;
