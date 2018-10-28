import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPublishElement
 * @class IconRoundPublishElement
 * @extends {AoflElement}
 */
class IconRoundPublishElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPublishElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-publish';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPublishElement.is, IconRoundPublishElement);

export default IconRoundPublishElement;
