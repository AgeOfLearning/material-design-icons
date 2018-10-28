import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSpeakerGroupElement
 * @class IconTwotoneSpeakerGroupElement
 * @extends {AoflElement}
 */
class IconTwotoneSpeakerGroupElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSpeakerGroupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-speaker-group';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSpeakerGroupElement.is, IconTwotoneSpeakerGroupElement);

export default IconTwotoneSpeakerGroupElement;
