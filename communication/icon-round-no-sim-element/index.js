import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundNoSimElement
 * @class IconRoundNoSimElement
 * @extends {AoflElement}
 */
class IconRoundNoSimElement extends AoflElement {
  /**
   * Creates an instance of IconRoundNoSimElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-no-sim';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundNoSimElement.is, IconRoundNoSimElement);

export default IconRoundNoSimElement;
